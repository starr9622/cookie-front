import * as React from "react";
import { useLocation } from "react-router-dom";
import { Image } from "../components";

export default function NoMatch() {
    let location = useLocation();
    const page = {
        path: "../../resources/Cookies/CookieFaces/GingerBrave.png",
        alt: "error page"
    }

    return (
      <div className="noPage">
        <Image path={page.path} alt={page.alt}/>
        <h1>
          404 Not error : <code>{location.pathname}</code>
        </h1>
      </div>
    );
  }