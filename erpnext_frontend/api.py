import frappe
from frappe.desk.desktop import get_workspace_sidebar_items
@frappe.whitelist(allow_guest=True)
def get_bootinfo():
    bootinfo = frappe._dict()
    bootinfo.sidebar_pages = get_workspace_sidebar_items()
    allowed_pages = [d.name for d in bootinfo.sidebar_pages.get("pages")]
    return allowed_pages