import React from 'react'
import '../steam/steam.css'
import '../../components/content/content.css'
import ContentHeader from '../../components/contentHeader/ContentHeader'
import Content from '../content/Content'


const Kpi = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <div className='dashboard--content'>
                <div className='steamtab'>
                    <div className='steamtab--title'>KPI
                        <div>
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Kpi