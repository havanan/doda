const customColumnDefs = config.columnDefs;
const defaultColumnDefs = {
    searchable: true,
    orderable: true,
    targets: 0
} ;
if (customColumnDefs) {
    customColumnDefs.push(defaultColumnDefs)
}
var table = $('.data-table').DataTable({
    processing: true,
    serverSide: true,
    paging: true,
    ajax: {
        url: config.ajax,
    },
    columns: config.columns,
    columnDefs:customColumnDefs,
    dom: 'Bfrtip',
    searchDelay: 500,
    cache:true,
    language: {
        sProcessing: "Đang xử lý...",
        sLengthMenu: "Xem _MENU_ mục",
        sZeroRecords: "Không tìm thấy dòng nào phù hợp",
        sInfo: "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
        sInfoEmpty: "Đang xem 0 đến 0 trong tổng số 0 mục",
        sInfoFiltered: "(được lọc từ _MAX_ mục)",
        sInfoPostFix: "",
        sSearch: "Tìm:",
        sUrl: "",
        oPaginate: {
            sFirst: "Đầu",
            sPrevious: "Trước",
            sNext: "Tiếp",
            sLast: "Cuối"
        }
    }
});
// vẽ số thứ tự từng dòng
table.on('draw.dt', function () {
    const info = table.page.info();
    table.column(0, { search: 'applied', order: 'applied', page: 'applied' }).nodes().each(function (cell, i) {
        cell.innerHTML = i + 1 + info.start;
    });
});
function reloadDataTable() {
    table.ajax.reload();
}