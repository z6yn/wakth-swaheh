"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(() => import("./WhatsAppButton"), { ssr: false })
//const BackgroundAnimation = dynamic(() => import("./BackgroundAnimation"), { ssr: false })

export default function ClientComponents() {
  return (
    <>
      {/* <BackgroundAnimation /> */}
      <WhatsAppButton />
    </>
  )
}

