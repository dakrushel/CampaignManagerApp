"use client"

import Image from "next/image";
import AddNew from "./components/addnew";
import NotesInput from "./components/DataInput/notesinput";
import { useState } from "react";

export default function Home() {

  const [showNotes, setShowNotes] = useState(false);

  let functionList = setShowNotes

  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AddNew functionsList={functionList}/>
        {showNotes && <NotesInput showNotes={setShowNotes}/>}
      </main>
  );
}
