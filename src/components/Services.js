import React, { useState } from "react"

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"

import Title from "./Title"
import "./Services.css"

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail></FaCocktail>,
      title: "free cocktail",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga"
    },
    {
      icon: <FaHiking></FaHiking>,
      title: "endless hiking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga"
    },
    {
      icon: <FaShuttleVan></FaShuttleVan>,
      title: "free shuttle",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga"
    },
    {
      icon: <FaBeer></FaBeer>,
      title: "strongest beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fuga"
    }
  ])

  return (
    <section className="services">
      <Title title="services"></Title>
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
