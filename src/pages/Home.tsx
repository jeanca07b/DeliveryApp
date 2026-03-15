import Hero from "../components/Hero"
import Restaurants from "./Restaurants"
import { useState } from "react"

export default function Home() {

  const [query, setQuery] = useState("")

  return (
    <>
      <Hero query={query} setQuery={setQuery} />
      <Restaurants query={query} />
    </>
  )
}