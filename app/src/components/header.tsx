import { useState } from "preact/hooks";

export interface HeaderProps {
  name: string;
  setName: (name: string) => void;
}

export function Header(props: HeaderProps) {
  return (
    <h1 style="align-items: center; display: flex; flex-direction: row;">
      <div style="margin-right: 6px;">OMG its</div>
      <div
        contentEditable="true"
        onInput={(e) => props.setName((e.target as any).textContent)}
      >
        {props.name}
      </div>
    </h1>
  );
}
