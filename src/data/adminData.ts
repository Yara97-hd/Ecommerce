// ============================================================================
// ADMIN DATA - Fake data for the admin dashboard (replace with real API)
// ============================================================================

// --- ADMIN CREDENTIALS (fake — replace with real auth) ---
export const adminCredentials = {
  email: "admin@revibe.me",
  password: "admin123",
};

// --- DASHBOARD STATS ---
export const dashboardStats = {
  totalRevenue: 248750,
  totalOrders: 342,
  totalCustomers: 1856,
  totalProducts: 20,
  revenueChange: 12.5,
  ordersChange: 8.3,
  customersChange: 15.2,
  productsChange: 3,
};

// --- REVENUE CHART DATA (last 7 days) ---
export const revenueChartData = [
  { day: "Mon", revenue: 32400 },
  { day: "Tue", revenue: 28900 },
  { day: "Wed", revenue: 41200 },
  { day: "Thu", revenue: 35600 },
  { day: "Fri", revenue: 52100 },
  { day: "Sat", revenue: 38700 },
  { day: "Sun", revenue: 19850 },
];

// --- ORDER STATUS DISTRIBUTION ---
export const orderStatusDistribution = [
  { status: "Delivered", count: 186, color: "#4caf50" },
  { status: "Shipped", count: 74, color: "#2196f3" },
  { status: "Processing", count: 52, color: "#ff9800" },
  { status: "Pending", count: 18, color: "#9e9e9e" },
  { status: "Cancelled", count: 12, color: "#f44336" },
];

// --- ORDERS ---
export type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: { productName: string; quantity: number; price: number }[];
  shippingAddress: string;
  paymentMethod: string;
}

export const orders: Order[] = [
  {
    id: "o1",
    orderNumber: "ORD-2026-001",
    customerName: "Ahmed Al Maktoum",
    customerEmail: "ahmed@example.com",
    date: "2026-03-22",
    status: "Processing",
    total: 2749,
    items: [{ productName: "iPhone 15 Pro Max", quantity: 1, price: 2749 }],
    shippingAddress: "Dubai Marina, Tower 4, Apt 1205, Dubai, UAE",
    paymentMethod: "Visa ending in 4242",
  },
  {
    id: "o2",
    orderNumber: "ORD-2026-002",
    customerName: "Fatima Hassan",
    customerEmail: "fatima@example.com",
    date: "2026-03-22",
    status: "Pending",
    total: 4298,
    items: [
      { productName: "MacBook Pro 14-inch M3", quantity: 1, price: 4299 },
    ],
    shippingAddress: "JBR, Shams Tower, Apt 804, Dubai, UAE",
    paymentMethod: "Apple Pay",
  },
  {
    id: "o3",
    orderNumber: "ORD-2026-003",
    customerName: "Khalid Ibrahim",
    customerEmail: "khalid@example.com",
    date: "2026-03-21",
    status: "Shipped",
    total: 3599,
    items: [
      { productName: "iPhone 16 Pro Max", quantity: 1, price: 3599 },
    ],
    shippingAddress: "Al Barsha Heights, Emirates Hills, Villa 12, Dubai, UAE",
    paymentMethod: "Mastercard ending in 8888",
  },
  {
    id: "o4",
    orderNumber: "ORD-2026-004",
    customerName: "Noura Al Suwaidi",
    customerEmail: "noura@example.com",
    date: "2026-03-21",
    status: "Delivered",
    total: 1889,
    items: [
      { productName: "iPhone 14 Pro Max", quantity: 1, price: 1889 },
    ],
    shippingAddress: "Downtown Dubai, Burj Views, Apt 2301, Dubai, UAE",
    paymentMethod: "Tabby (4 installments)",
  },
  {
    id: "o5",
    orderNumber: "ORD-2026-005",
    customerName: "Omar Rashid",
    customerEmail: "omar@example.com",
    date: "2026-03-20",
    status: "Delivered",
    total: 2499,
    items: [
      { productName: "Galaxy S24 Ultra", quantity: 1, price: 2499 },
    ],
    shippingAddress: "Business Bay, Executive Towers, Tower G, Apt 1502, Dubai, UAE",
    paymentMethod: "Visa ending in 1234",
  },
  {
    id: "o6",
    orderNumber: "ORD-2026-006",
    customerName: "Sara Mohammed",
    customerEmail: "sara@example.com",
    date: "2026-03-20",
    status: "Delivered",
    total: 3808,
    items: [
      { productName: "iPhone 13 Pro", quantity: 1, price: 1409 },
      { productName: "iPad Pro 12.9-inch M2", quantity: 1, price: 2399 },
    ],
    shippingAddress: "Jumeirah Lakes Towers, Cluster D, Apt 704, Dubai, UAE",
    paymentMethod: "Cash on Delivery",
  },
  {
    id: "o7",
    orderNumber: "ORD-2026-007",
    customerName: "Yusuf Ali",
    customerEmail: "yusuf@example.com",
    date: "2026-03-19",
    status: "Cancelled",
    total: 2169,
    items: [
      { productName: "iPhone 15 Pro", quantity: 1, price: 2169 },
    ],
    shippingAddress: "Al Nahda, Sharjah, UAE",
    paymentMethod: "Tamara",
  },
  {
    id: "o8",
    orderNumber: "ORD-2026-008",
    customerName: "Layla Qasim",
    customerEmail: "layla@example.com",
    date: "2026-03-19",
    status: "Shipped",
    total: 1429,
    items: [
      { productName: "Dell Latitude 7420", quantity: 1, price: 1429 },
    ],
    shippingAddress: "Motor City, Uptown Apartments, Apt 305, Dubai, UAE",
    paymentMethod: "Visa ending in 5678",
  },
  {
    id: "o9",
    orderNumber: "ORD-2026-009",
    customerName: "Rashid Bin Saeed",
    customerEmail: "rashid@example.com",
    date: "2026-03-18",
    status: "Delivered",
    total: 2599,
    items: [
      { productName: "MacBook Air 13-inch M2", quantity: 1, price: 2599 },
    ],
    shippingAddress: "Palm Jumeirah, Shoreline, Apt 1901, Dubai, UAE",
    paymentMethod: "Apple Pay",
  },
  {
    id: "o10",
    orderNumber: "ORD-2026-010",
    customerName: "Hind Al Falasi",
    customerEmail: "hind@example.com",
    date: "2026-03-18",
    status: "Processing",
    total: 1049,
    items: [
      { productName: "iPhone 13", quantity: 1, price: 1049 },
    ],
    shippingAddress: "Silicon Oasis, Axis Residences, Apt 412, Dubai, UAE",
    paymentMethod: "Mastercard ending in 3456",
  },
];

// --- CUSTOMERS ---
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  joinedDate: string;
  lastOrder: string;
  status: "Active" | "Inactive";
}

export const customers: Customer[] = [
  { id: "c1", name: "Ahmed Al Maktoum", email: "ahmed@example.com", phone: "+971 50 123 4567", totalOrders: 5, totalSpent: 12450, joinedDate: "2025-08-15", lastOrder: "2026-03-22", status: "Active" },
  { id: "c2", name: "Fatima Hassan", email: "fatima@example.com", phone: "+971 55 234 5678", totalOrders: 3, totalSpent: 8750, joinedDate: "2025-09-20", lastOrder: "2026-03-22", status: "Active" },
  { id: "c3", name: "Khalid Ibrahim", email: "khalid@example.com", phone: "+971 52 345 6789", totalOrders: 7, totalSpent: 18900, joinedDate: "2025-06-10", lastOrder: "2026-03-21", status: "Active" },
  { id: "c4", name: "Noura Al Suwaidi", email: "noura@example.com", phone: "+971 56 456 7890", totalOrders: 2, totalSpent: 3780, joinedDate: "2025-11-05", lastOrder: "2026-03-21", status: "Active" },
  { id: "c5", name: "Omar Rashid", email: "omar@example.com", phone: "+971 50 567 8901", totalOrders: 4, totalSpent: 9200, joinedDate: "2025-07-22", lastOrder: "2026-03-20", status: "Active" },
  { id: "c6", name: "Sara Mohammed", email: "sara@example.com", phone: "+971 55 678 9012", totalOrders: 6, totalSpent: 15600, joinedDate: "2025-05-18", lastOrder: "2026-03-20", status: "Active" },
  { id: "c7", name: "Yusuf Ali", email: "yusuf@example.com", phone: "+971 52 789 0123", totalOrders: 1, totalSpent: 2169, joinedDate: "2026-01-10", lastOrder: "2026-03-19", status: "Inactive" },
  { id: "c8", name: "Layla Qasim", email: "layla@example.com", phone: "+971 56 890 1234", totalOrders: 3, totalSpent: 5430, joinedDate: "2025-10-30", lastOrder: "2026-03-19", status: "Active" },
  { id: "c9", name: "Rashid Bin Saeed", email: "rashid@example.com", phone: "+971 50 901 2345", totalOrders: 8, totalSpent: 22100, joinedDate: "2025-04-12", lastOrder: "2026-03-18", status: "Active" },
  { id: "c10", name: "Hind Al Falasi", email: "hind@example.com", phone: "+971 55 012 3456", totalOrders: 2, totalSpent: 2098, joinedDate: "2025-12-01", lastOrder: "2026-03-18", status: "Active" },
];

// --- RECENT ACTIVITY ---
export const recentActivity = [
  { type: "order", message: "New order #ORD-2026-001 from Ahmed Al Maktoum", time: "2 hours ago" },
  { type: "order", message: "New order #ORD-2026-002 from Fatima Hassan", time: "3 hours ago" },
  { type: "shipping", message: "Order #ORD-2026-003 shipped to Khalid Ibrahim", time: "5 hours ago" },
  { type: "delivery", message: "Order #ORD-2026-004 delivered to Noura Al Suwaidi", time: "8 hours ago" },
  { type: "customer", message: "New customer Hind Al Falasi registered", time: "1 day ago" },
  { type: "review", message: "New 5-star review from Omar Rashid", time: "1 day ago" },
  { type: "return", message: "Return request from Yusuf Ali for order #ORD-2026-007", time: "2 days ago" },
  { type: "stock", message: "iPhone 14 Pro is now out of stock", time: "2 days ago" },
];

// --- ADMIN SETTINGS ---
export const adminSettings = {
  storeName: "Revibe",
  storeEmail: "admin@revibe.me",
  currency: "AED",
  timezone: "Asia/Dubai",
  freeShippingThreshold: 500,
  returnDays: 10,
  warrantyMonths: 12,
};
