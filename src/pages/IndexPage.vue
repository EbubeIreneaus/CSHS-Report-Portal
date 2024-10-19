<script setup lang="ts"></script>

<template>
  <main class="tw-w-full tw-min-h-screen tw-bg-primary tw-border">
    <header>
      <nav>
        <q-img src="~assets/images/logo.png" class="logo-img" />
        <div class="welcome-name hide-sm">
          <p class="name">Welcome Kodar</p>
        </div>
        <div class="account-info">
          <q-img src="~assets/images/sailor.jpg" class="p-img" />
          <p>Account Info</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            class="svg"
          >
            <path
              d="M12 3.05606C11.175 3.05606 10.5 3.73106 10.5 4.55606C10.5 5.38106 11.175 6.05606 12 6.05606C12.825 6.05606 13.5 5.38106 13.5 4.55606C13.5 3.73106 12.825 3.05606 12 3.05606ZM12 18.0561C11.175 18.0561 10.5 18.7311 10.5 19.5561C10.5 20.3811 11.175 21.0561 12 21.0561C12.825 21.0561 13.5 20.3811 13.5 19.5561C13.5 18.7311 12.825 18.0561 12 18.0561ZM12 10.5561C11.175 10.5561 10.5 11.2311 10.5 12.0561C10.5 12.8811 11.175 13.5561 12 13.5561C12.825 13.5561 13.5 12.8811 13.5 12.0561C13.5 11.2311 12.825 10.5561 12 10.5561Z"
              fill="#15015A"
            />
          </svg>
        </div>
      </nav>

      <div class="welcome-name-mobile">
        <p class="name">Welcome Kodar</p>
      </div>

      <div class="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"
            fill="#15015A"
          />
        </svg>
        <div class="tw-w-fit tw-overflow-hidden">
          <p class="tw-line-clamp-1">
            You can now generate PIN to check/ Access your 2023/2024 first term
            session result here. ***. For any complains or enquiries, please
            contact your class teacher/ principal.***. For su
          </p>
        </div>
      </div>
    </header>

    <div class="mini-body">
      <div class="navigate">
        <p>Check Result</p>
      </div>

      <div class="navigate">
        <p>Generate Result ePIN</p>
      </div>
    </div>

    <div class="footer">
      <div style="text-align: center">
        <span
          >Copyright © 2024 CAROS STANDARD HIGH SCHOOL. All rights reserved.<br /></span
        ><span class="tw-underline"
          >Powered By Reconsoft Microsystem Limited!</span
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-image: url('/images/background-home.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

header {
  display: flex;
  padding: 40px 100px 24px 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  .welcome-name-mobile{
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    .logo-img {
      width: 214px;
      height: 76px;
    }

    .welcome-name {
      display: flex;
      width: 294px;
      height: 68px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 12px;
      background: $accent;

      .name {
        color: #fff;
        font-family: Raleway;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
      }
    }
    .account-info {
      display: flex;
      width: 215px;
      align-items: center;
      gap: 16px;

      .p-img {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 60px;
      }

      p {
        color: $accent;
        text-align: center;
        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
      }
      .svg{
        display: none;
      }
    }
  }

  .alert {
    display: flex;
    padding: 10px 16px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 30px;
    background: rgba(33, 2, 140, 0.1);

    p {
      color: $accent;
      font-family: Raleway;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;

      overflow: hidden !important;
      animation: marquee 20s linear infinite;
    }
  }
}

.mini-body {
  display: flex;
  width: 398px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  position: absolute;
  top: 300px;
  left: 50%;
  margin-left: -199px;

  .navigate {
    display: flex;
    height: 120px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 2px;
    background: rgba(33, 2, 140, 0.1);

    p {
      color: #000;
      font-family: Raleway;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
    }
  }
}

.footer {
  padding: 10px;
  width: 672px;
  left: 50%;
  margin-left: -336px;
  top: 627px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;


  span {
    color: black;
    font-size: 20px;
    font-family: Raleway;
    font-weight: 500;
    line-height: 30px;
    word-wrap: break-word;
  }
}

@media (max-width: 480px) {
  header {
    padding: 16px 20px;

    .welcome-name-mobile {
      display: flex;
      width: 294px;
      height: 68px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 12px;
      background: $accent;
      .name {
        color: #fff;
        font-family: Raleway;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
      }
    }

    nav {
      .logo-img {
        width: 135.474px;
        height: 48.112px;
        flex-shrink: 0;
      }
      .welcome-name {
        display: none;
      }
      .account-info {
        width: fit-content;

        .p-img {
          width: 40px;
          height: 40px;
          border-radius: 40px;
        }

        p {
          display: none;
        }

        .svg {
          display: inline;
        }
      }
    }

    .alert {
      padding: 8px 12px;
    }
  }

  .mini-body {
    width: 275px;
    gap: 24px;
    margin-left: -137.5px;
    top: 320px;
    .navigate {
      display: flex;
      width: 275px;
      height: 100px;
      padding: 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 2px;
    }
  }
  .footer {
    width: 353px;
    padding: 10px;
    margin-left: -176.5px;
    top: 586px;

    span{
      font-size: 10px;
    }
  }
}

@keyframes marquee {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
