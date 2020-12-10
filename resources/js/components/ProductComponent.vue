<template>
  <div>
      <div class="form-body">
          <h3 class="box-title">Thông tin sản phẩm</h3>
          <hr class="m-t-0 m-b-40">
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Tên đầy đủ</label>
                      <div class="col-md-9"><input type="text" placeholder="Vd: Hoàng Văn Xyz" name="name" value=""
                                                   required="required" class="form-control"></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Email</label>
                      <div class="col-md-9"><input type="email" placeholder="Vd: abcd@xyz.com" name="email" value=""
                                                   required="required" class="form-control"></div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Giới tính</label>
                      <div class="col-md-9"><select name="gender" required="required" class="form-control custom-select">
                          <option value="0">Nữ</option>
                          <option value="1">Nam</option>
                          <option value="2">Khác</option>
                      </select></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Điện thoại</label>
                      <div class="col-md-9"><input type="number" max="9999999999999" name="phone" required="required"
                                                   placeholder="Vd: 039283333" value="" class="form-control"></div>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Phân loại</label>
                      <div class="col-md-9"><select data-placeholder="Vui lòng chọn loại khách" tabindex="1"
                                                    class="form-control custom-select">
                          <option value="0">Khách lẻ</option>
                          <option value="1">Khách sỉ</option>
                          <option value="2">Khác</option>
                      </select></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Sinh nhật</label>
                      <div class="col-md-9"><input type="date" placeholder="dd/mm/yyyy" name="birthday" value="2020-12-10"
                                                   class="form-control"></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Trạng thái</label>
                      <div class="col-md-9">
                          <div class="m-b-10"><label class="custom-control custom-radio"><input value="0" id="radio0"
                                                                                                name="status" type="radio"
                                                                                                checked="checked"
                                                                                                class="custom-control-input">
                              <span class="custom-control-label">Khóa</span></label> <label
                                  class="custom-control custom-radio"><input value="1" id="radio1" name="status"
                                                                             type="radio" class="custom-control-input">
                              <span class="custom-control-label">Hoạt động</span></label></div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Ảnh đại diện</label>
                      <div class="col-md-9">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="input-group"><span class="input-group-btn"><a id="lfm"
                                                                                            data-input="thumbnail"
                                                                                            data-preview="holder"
                                                                                            class="btn btn-primary text-white"><i
                                          class="fa fa-picture-o"></i> Chọn ảnh
                                                     </a></span> <input id="thumbnail" type="text" name="avatar"
                                                                        value="" class="form-control"
                                                                        style="display: none;"></div>
                              </div>
                              <div class="col-md-6">
                                  <div id="holder" style="max-height: 200px;"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <h3 class="box-title">Địa chỉ</h3>
          <hr class="m-t-0 m-b-40">
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Địa chỉ 1</label>
                      <div class="col-md-9"><textarea name="address_1" class="form-control"></textarea></div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group row"><label class="control-label text-right col-md-3">Địa chỉ 2</label>
                      <div class="col-md-9"><textarea name="address_2" class="form-control"></textarea></div>
                  </div>
              </div>
          </div>
      </div>
      <hr>
      <div class="form-actions">
          <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                  <div class="row">
                      <div class="col-md-offset-3 col-md-9">
                          <button type="reset" class="btn btn-primary">Làm mới</button>
                          <button type="submit" class="btn btn-danger">Lưu thông tin</button>
                      </div>
                  </div>
              </div>
              <div class="col-md-6"></div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "product-component",
    }
</script>

<style scoped>

</style>