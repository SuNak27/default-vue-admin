<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside aside-dark aside-hoverable"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_mobile_toggle"
  >
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto" id="kt_aside_logo">
      <!--begin::Logo-->
      <a href="#">
        <img alt="Logo" class="h-25px logo" />
      </a>
      <!--end::Logo-->
      <!--begin::Aside toggler-->
      <div
        id="kt_aside_toggle"
        class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
        data-kt-toggle="true"
        data-kt-toggle-state="active"
        data-kt-toggle-target="body"
        data-kt-toggle-name="aside-minimize"
      >
        <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
        <span class="svg-icon svg-icon-1 rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
              fill="black"
            />
            <path
              d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
              fill="black"
            />
          </svg>
        </span>
        <!--end::Svg Icon-->
      </div>
      <!--end::Aside toggler-->
    </div>
    <!--end::Brand-->
    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
      <!--begin::Aside Menu-->
      <div
        class="hover-scroll-overlay-y my-5 my-lg-5"
        id="kt_aside_menu_wrapper"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        data-kt-scroll-wrappers="#kt_aside_menu"
        data-kt-scroll-offset="0"
      >
        <!--begin::Menu-->
        <div
          class="
            menu
            menu-column
            menu-title-gray-800
            menu-state-title-primary
            menu-state-icon-primary
            menu-state-bullet-primary
            menu-arrow-gray-500
          "
          id="#kt_aside_menu"
          data-kt-menu="true"
        >
          <div class="menu-item">
            <router-link
              :class="$route.name == 'Home' ? 'menu-link active' : 'menu-link'"
              to="/"
            >
              <span class="menu-icon">
                <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen008.svg-->
                <span class="svg-icon svg-icon-muted svg-icon-1"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z"
                      fill="currentColor"
                    /></svg
                ></span>
                <!--end::Svg Icon-->
                <!--end::Svg Icon-->
              </span>
              <span class="menu-title">Home</span>
            </router-link>
          </div>
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Aside Menu-->
    </div>
    <!--end::Aside menu-->
  </div>
  <!--end::Aside-->
</template>

<script>
const token = localStorage.getItem("token");
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
export default {
  name: "Aside",
  data() {
    return {
      user: parseJwt(token),
    };
  },
};
</script>

<style>
</style>