import React from 'react'
import '../steam/steam.css'
import '../../components/content/content.css'
import ContentHeader from '../../components/contentHeader/ContentHeader'

const SteamTrend = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <div className='dashboard--content'>
                <div className='steamtab'>
                    <div className='steamtab--title'>Steam Trend</div>
                </div>
            </div>
        </div >
    )
}
export default SteamTrend