"use client";
import { Search, Bell } from "lucide-react";

export function Topbar(){
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="search">
          <Search className="icon" size={16} />
          <input placeholder="Search your game" />
        </div>
        <button className="btn btn-outline"><Bell size={16}/></button>
      </div>
    </div>
  );
}
