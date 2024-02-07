import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/ihjasdev"
            rel="noreferrer"
            target="_blank"
          >
            <i class="ri-facebook-circle-line text-gray-400"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ihjas/"
            rel="noreferrer"
            target="_blank"
          >
            <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a
            href="https://www.facebook.com/ihjasdev"
            rel="noreferrer"
            target="_blank"
          >
            <i class="ri-mail-line text-gray-400 "></i>
          </a>
          <a
            href="https://www.facebook.com/ihjasdev"
            rel="noreferrer"
            target="_blank"
          >
            <i class="ri-whatsapp-line text-gray-400 "></i>
          </a>
          <a
            href="https://github.com/ihjasdev"
            rel="noreferrer"
            target="_blank"
          >
            <i class="ri-github-fill text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[2px] h-52 bg-[#13626d] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
