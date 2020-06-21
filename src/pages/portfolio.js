import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const Portfolio = () => (
    <div>
        <Layout>
            <p>Portfolio <button><Link to="/home">back button</Link></button></p>
        </Layout>      
    </div>
)

export default Portfolio