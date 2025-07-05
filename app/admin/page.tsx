"use client"

import { useState, useEffect } from "react"
import { type Lead, getLeads } from "@/lib/actions"
import { Phone, Mail, Calendar, User, Filter, Download, RefreshCw, Eye } from "lucide-react"

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "primary" | "secondary">("all")
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      setRefreshing(true)
      const { leads, error } = await getLeads()
      console.log("Fetched leads:", leads)
      if (error) {
        console.error("Error fetching leads:", error)
      } else {
        console.log("Fetched leads successfully:", leads)
        setLeads(leads || [])
      }
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const exportToCSV = () => {
    const csvContent = [
      ["שם", "טלפון", "אימייל", "סוג טופס", "תאריך יצירה"],
      ...filteredLeads.map((lead) => [
        lead.name,
        lead.phone,
        lead.email || "",
        lead.variant === "primary" ? "טופס ראשי" : "טופס משני",
        formatDate(lead.created_at!),
      ]),
    ]
      .map((row) => row.map((field) => `"${field}"`).join(","))
      .join("\n")

    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `leads-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const filteredLeads = leads.filter((lead) => filter === "all" || lead.variant === filter)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("he-IL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStats = () => {
    const total = leads.length
    const primary = leads.filter((l) => l.variant === "primary").length
    const secondary = leads.filter((l) => l.variant === "secondary").length
    const withEmail = leads.filter((l) => l.email).length

    return { total, primary, secondary, withEmail }
  }

  const stats = getStats()

  if (loading) {
    return (
      <div className="min-h-screen bg-brandLight flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brandTeal mx-auto mb-4"></div>
          <p className="text-brandGray">טוען נתונים מ-Supabase...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brandLight py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-heading font-bold text-brandBlue">ניהול פניות - Supabase</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={fetchLeads}
                disabled={refreshing}
                className="flex items-center gap-2 px-4 py-2 bg-brandTeal text-white rounded-lg hover:brightness-90 disabled:opacity-50"
              >
                <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
                רענן
              </button>
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 px-4 py-2 bg-brandBlue text-white rounded-lg hover:brightness-90"
              >
                <Download size={16} />
                ייצא ל-CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-brandLight rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brandBlue">{stats.total}</div>
              <div className="text-sm text-brandGray">סה"כ פניות</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.primary}</div>
              <div className="text-sm text-brandGray">טופס ראשי</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.secondary}</div>
              <div className="text-sm text-brandGray">טופס משני</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.withEmail}</div>
              <div className="text-sm text-brandGray">עם אימייל</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-brandGray" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">כל הפניות ({stats.total})</option>
                <option value="primary">טופס ראשי ({stats.primary})</option>
                <option value="secondary">טופס משני ({stats.secondary})</option>
              </select>
            </div>
            <div className="text-sm text-brandGray">מציג: {filteredLeads.length} פניות</div>
          </div>
        </div>

        {/* Leads List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid gap-4">
            {filteredLeads.length === 0 ? (
              <div className="text-center py-12 text-brandGray">
                <User size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">אין פניות להצגה</p>
                <p className="text-sm">
                  {filter === "all"
                    ? "עדיין לא התקבלו פניות"
                    : `אין פניות מסוג "${filter === "primary" ? "טופס ראשי" : "טופס משני"}"`}
                </p>
              </div>
            ) : (
              filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-brandBlue">{lead.name}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            lead.variant === "primary" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {lead.variant === "primary" ? "טופס ראשי" : "טופס משני"}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Phone size={16} className="text-brandTeal" />
                            <a href={`tel:${lead.phone}`} className="text-brandGray hover:text-brandTeal font-medium">
                              {lead.phone}
                            </a>
                          </div>

                          {lead.email && (
                            <div className="flex items-center gap-3">
                              <Mail size={16} className="text-brandTeal" />
                              <a
                                href={`mailto:${lead.email}`}
                                className="text-brandGray hover:text-brandTeal font-medium"
                              >
                                {lead.email}
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Calendar size={16} className="text-brandTeal" />
                            <span className="text-brandGray">{formatDate(lead.created_at!)}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Eye size={16} className="text-brandTeal" />
                            <span className="text-brandGray">ID: {lead.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Supabase Integration:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• הנתונים נשמרים ב-Supabase Database</li>
            <li>• גיבוי אוטומטי וביטחון גבוה</li>
            <li>• ניתן לצפות בנתונים גם ב-Supabase Dashboard</li>
            <li>• לחץ על מספר טלפון להתקשרות ישירה</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
