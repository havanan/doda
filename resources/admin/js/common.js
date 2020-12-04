$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
const warningAlert = {
    title: 'Cảnh báo !',
    text: 'Bạn chắc chắn muốn thực hiện tác vụ ?'
};
const DATE_TIME   = 'HH:mm DD/MM/YYYY';
const DATE = 'DD/MM/YYYY';

function alertDelete(id) {
    swal({
        title: warningAlert.title,
        text: warningAlert.text,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Đúng !",
        cancelButtonText: "Hủy",
        closeOnConfirm: false
    }, function(isConfirm){
       if (isConfirm){
           $.ajax({
               type:'POST',
               url: urlDelete,
               data:{
                   id: id
               },
               success:function(response){
                  if (response) {
                      response = JSON.parse(response);
                      if (response.code === 500) {
                          swal(response.text, "", "success");
                          reloadDataTable()
                          return false;
                      }
                  }
               },
               error: function(e){
                   swal(lang.opps, lang.alert_error, "error");
                   return false;
               }
           });

       }
    });
}
function getUConfTable() {
    return {
        ajax: urlList,
        columns: [
            {data:null},
            {
                data:'avatar',
                render:function (data) {
                    let img = '';
                    if (data) {
                        img = '<img src="'+data+'" class="img-circle img-responsive" />';
                    }
                    return img;
                }},
            {
                data:'name',
                render:function (data,b,row) {

                    let addr1 = '';
                    let addr2 = '';
                    const name = '<p class="box-title">'+data+'</p>';
                    if (row) {
                        if (row.address_1){
                            addr1 = '<address><i class="fa fa-podcast"></i>'+row.address_1+'</address>'
                        }
                        if (row.address_2){
                            addr1 = '<address><i class="fa fa-podcast"></i>'+row.address_2+'</address>'
                        }
                    }
                    return '<div class="row">' +
                        '<div">'+name+addr1+addr2+'</div>' +
                        '</div>';
                }},
            {data:'email'},
            {data:'phone'},
            {data:'birthday',
                type:'date',
                render: function(data){
                    if (data === null) return "";
                    return moment(data).format(DATE);
                },},
            {data:'status',render:function (data) {

                    let btn = '<span class="label label-danger font-weight-100">Khóa</span>';

                    if (data) {
                        console.log('ahihi')
                        btn = '<span class="label label-success font-weight-100">Hoạt động</span>'
                    }
                    return btn;
                }},
            {data:'created_at',
                type:'date',
                render: function(data){
                    if (data === null) return "";
                    return moment(data).format(DATE_TIME);
                },},
            {data: null,
                render: function (data) {
                    if (!data) {
                        return ''
                    }
                    return '<a href="user/view/'+data.id+'" class="btn btn-success m-r-5"><i class="fa fa-info-circle"></i></a >'+
                        '<a href="user/edit/'+data.id+'" class="btn btn-info m-r-5"><i class="fa fa-pencil"></i></a>' +
                        '<button class="btn btn-danger alert-delete" onclick="alertDelete('+data.id+')"><i class="fa fa-trash"></i></button>'
                }}
        ],
        columnDefs: [],
    }
}