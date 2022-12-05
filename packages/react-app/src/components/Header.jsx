import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/" /*target="_blank" rel="noopener noreferrer"*/>
      <PageHeader
        title="₿ Ledger!!"
        subTitle="Staking app"
        style={{ cursor: "pointer", width: '100%', justifyContent: 'center'}}
      />
    </a>
  );
}
