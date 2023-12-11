import React from "react";
import "../CSS/Search.css";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

export default function Search() {
    return (
        <>
            <MediaQuery minWidth={651}>
                <div className="search">
                    <form>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Quick search"
                        />
                    </form>

                    <div className="navbar">
                        <div className="Home">
                            <NavLink to={"/"}>Home</NavLink>
                        </div>

                        <div className="popular">
                            <NavLink to={"/popular"}>Popular</NavLink>
                        </div>

                        <div className="top-rated">
                            <NavLink to={"/top-rated"}>Top Rated</NavLink>
                        </div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={650}>
                <div className="search">
                    <form>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Quick search"
                        />
                    </form>

                    <i className="bi bi-list"></i>
                </div>
            </MediaQuery>
        </>
    );
}
