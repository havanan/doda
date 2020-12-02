$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
const warningAlert = {
    title: 'Cảnh báo !',
    text: 'Bạn chắc chắn muốn thực hiện tác vụ ?'
};
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