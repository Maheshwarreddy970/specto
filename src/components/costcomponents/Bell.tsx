import React from "react";
import {NotificationIcon} from "./NotificationIcon";

export default function Bell() {
  return (
    <div>
      <div
        aria-label="more than 99 notifications"
      >
        <NotificationIcon size={20} />
      </div>
    </div>
  );
}
