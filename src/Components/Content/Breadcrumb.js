import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
            <Link className="breadcrumb-item" to={match.url || ""}>{breadcrumb}</Link>
        ))}
        </ol>
    </nav>
);

export default withBreadcrumbs()(PureBreadcrumbs);

