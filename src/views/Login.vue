<template>
  <div class="sign">
    <div class="d-flex flex-column flex-root">
      <!--begin::Authentication - Sign-in -->
      <div class="d-flex flex-column position-x-center bgi-no-repeat">
        <!--begin::Content-->
        <div
          class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"
        >
          <!--begin::Logo-->
          <a href="#" class="mb-12 mt-12">
            <img alt="Logo" src="../assets/img/logo.png" class="h-90px" />
          </a>
          <!--end::Logo-->
          <!--begin::Wrapper-->
          <div
            class="w-sm-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
          >
            <!--begin::Form-->
            <form class="w-100" id="sign" v-on:submit.prevent>
              <!--begin::Heading-->
              <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">Sign In</h1>
                <!--end::Title-->
              </div>
              <!--begin::Heading-->
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bolder text-dark"
                  >Username</label
                >
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  class="form-control form-control-lg form-control-solid"
                  type="text"
                  autofocus
                  v-model="username"
                />
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack mb-2">
                  <!--begin::Label-->
                  <label class="form-label fw-bolder text-dark fs-6 mb-0"
                    >Password</label
                  >
                  <!--end::Label-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Input-->
                <input
                  class="form-control form-control-lg form-control-solid"
                  type="password"
                  v-model="password"
                  autocomplete="off"
                />
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Actions-->
              <div class="text-center">
                <!--begin::Submit button-->
                <button
                  type="submit"
                  @click="simpan()"
                  id="sub"
                  class="btn btn-lg btn-primary w-100 mb-5"
                >
                  <span class="indicator-label">Continue</span>
                  <span class="indicator-progress"
                    >Please wait...
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span
                  ></span>
                </button>
                <!--end::Submit button-->
              </div>
              <!--end::Actions-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Authentication - Sign-in-->
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    simpan() {
      var e = document.querySelector("#sub");
      e.setAttribute("data-kt-indicator", "on");
      if (this.username != "" && this.password != "") {
        setTimeout(function () {
          e.removeAttribute("data-kt-indicator");
        }, 2e3);
        axios
          .post("/login", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            if (response.status === 200) {
              localStorage.setItem("token", response.data.token);
              Swal.fire({
                text: "Sukses login!",
                icon: "success",
                buttonsStyling: !1,
                confirmButtonText: "Ok!",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(() => {
                this.$router.go();
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              text: err.response.data.message,
              icon: "error",
              buttonsStyling: !1,
              confirmButtonText: "Coba lagi!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          });
      } else {
        setTimeout(function () {
          e.removeAttribute("data-kt-indicator"),
            Swal.fire({
              text: "Data tidak boleh kosong!",
              icon: "error",
              buttonsStyling: !1,
              confirmButtonText: "Coba lagi!",
              customClass: { confirmButton: "btn btn-primary" },
            });
        }, 2e3);
      }
    },
  },
};
</script>