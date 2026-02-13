<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pharmacy Management Dashboard</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body{background:#eef6f8;font-family:'Inter',system-ui,sans-serif}

    /* SIDEBAR */
    .sidebar{
      background:linear-gradient(180deg,#12c2b9,#2ecc71);
      min-height:100vh;
      color:#fff;
      padding:24px 18px;
    }
    .brand{font-weight:700;font-size:20px;margin-bottom:32px;display:flex;align-items:center;gap:8px}
    .menu a{
      display:flex;align-items:center;gap:10px;
      padding:10px 12px;
      border-radius:10px;
      color:#eafff9;
      text-decoration:none;
      margin-bottom:6px;
      font-weight:500;
    }
    .menu a.active,.menu a:hover{background:rgba(255,255,255,.18)}

    /* TOP BAR */
    .topbar{
      background:#fff;
      border-radius:16px;
      padding:14px 20px;
      box-shadow:0 10px 25px rgba(0,0,0,.06);
    }

    /* CARDS */
    .card{
      border:0;
      border-radius:18px;
      box-shadow:0 12px 30px rgba(0,0,0,.07);
    }
    .stat-card{display:flex;align-items:center;gap:14px}
    .stat-icon{
      width:52px;height:52px;
      border-radius:14px;
      display:flex;align-items:center;justify-content:center;
      font-size:22px;
    }

    /* TABLE */
    table th{font-weight:600;color:#6c757d}

    /* BADGES */
    .badge-soft{
      padding:6px 12px;
      border-radius:20px;
      font-weight:500;
    }
    .badge-pending{background:#ffe8b3;color:#b78103}
    .badge-ready{background:#d7f5e8;color:#198754}
    .badge-processing{background:#e7f1ff;color:#0d6efd}
    .badge-reorder{background:#ffd6d6;color:#dc3545}
  </style>
</head>
<body>
<div class="container-fluid">
  <div class="row g-3">

    <!-- SIDEBAR -->
    <aside class="col-lg-2 sidebar">
      <div class="brand">💊 Pharmacy</div>
      <div class="menu">
        <a class="active" href="#"><i class="bi bi-speedometer2"></i>Dashboard</a>
        <a href="#"><i class="bi bi-box-seam"></i>Inventory</a>
        <a href="#"><i class="bi bi-file-medical"></i>Prescriptions</a>
        <a href="#"><i class="bi bi-cash-coin"></i>Sales & Billing</a>
        <a href="#"><i class="bi bi-people"></i>Patients</a>
        <a href="#"><i class="bi bi-truck"></i>Suppliers</a>
        <a href="#"><i class="bi bi-bar-chart"></i>Reports</a>
        <a href="#"><i class="bi bi-gear"></i>Settings</a>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="col-lg-10">

      <!-- TOP BAR -->
      <div class="topbar mb-4 d-flex justify-content-between align-items-center">
        <h4 class="mb-0">Pharmacy Management System</h4>
        <div class="d-flex align-items-center gap-3">
          <input class="form-control" style="width:260px" placeholder="Search...">
          <i class="bi bi-bell fs-5"></i>
          <img src="https://i.pravatar.cc/40" class="rounded-circle" />
        </div>
      </div>

      <!-- STATS -->
      <div class="row g-4 mb-4">
        <div class="col-md-3">
          <div class="card p-3 stat-card">
            <div class="stat-icon bg-primary bg-opacity-25"><i class="bi bi-capsule"></i></div>
            <div><small>Total Medicines</small><h5 class="mb-0">1,250</h5></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-3 stat-card">
            <div class="stat-icon bg-danger bg-opacity-25"><i class="bi bi-exclamation-triangle"></i></div>
            <div><small>Low Stock Alerts</small><h5 class="mb-0">18</h5></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-3 stat-card">
            <div class="stat-icon bg-success bg-opacity-25"><i class="bi bi-currency-dollar"></i></div>
            <div><small>Today's Sales</small><h5 class="mb-0">KSh 75,300</h5></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-3 stat-card">
            <div class="stat-icon bg-warning bg-opacity-25"><i class="bi bi-clipboard"></i></div>
            <div><small>Pending Prescriptions</small><h5 class="mb-0">12</h5></div>
          </div>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="row g-4">
        <div class="col-lg-8">
          <div class="card p-4">
            <h6 class="mb-3">Low Stock Medicines</h6>
            <table class="table align-middle">
              <thead><tr><th>Medicine</th><th>Stock</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>Paracetamol</td><td>12</td><td><span class="badge-soft badge-pending">Low Stock</span></td></tr>
                <tr><td>Metformin</td><td>8</td><td><span class="badge-soft badge-reorder">Reorder Needed</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card p-4">
            <h6 class="mb-3">Today's Prescriptions</h6>
            <div class="d-flex justify-content-between mb-2">Sarah W.<span class="badge-soft badge-pending">Pending</span></div>
            <div class="d-flex justify-content-between mb-2">James M.<span class="badge-soft badge-ready">Ready</span></div>
            <div class="d-flex justify-content-between mb-2">Neema K.<span class="badge-soft badge-processing">Processing</span></div>
          </div>
        </div>
      </div>

    </main>
  </div>
</div>
</body>
</html>
