import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PlanDetails = () => {
    const [plan, setplan] = useState({
        title: '',
        description: '',
        type: ''
    })

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3001/api/actionPlans/getOne/` + params.id).then((res) => {
            setplan({
                title: res.data.plans.title,
                 description: res.data.plans.description,
                 category: res.data.plans.category

            })
            console.log(res.data.title)
            console.log(res.data.description)
            console.log(res.data.plans)


        })
    }, [])
  return (
    <>
    <i className="bi bi-arrow-left h1" type= 'button' onClick={() => (navigate("/home"))}></i>
    <div className="">
        <h3 className="text-center text-capitalize">{plan.title}</h3>
        <h4 className="">
            {plan.category}
        </h4>
    </div>
    </>
  )
}

export default PlanDetails