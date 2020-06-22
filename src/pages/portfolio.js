import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const Portfolio = () => (
    <div>
        <Layout>
            <p>Portfolio</p>
            <button><Link to="/home">back button</Link></button>
        </Layout>      
    </div>
)

export default Portfolio