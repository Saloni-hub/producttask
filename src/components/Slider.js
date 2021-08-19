import React from 'react'

const Slider = () => {
    return (
        <div id="demo" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Los Angeles" className="w-100"/>
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Chicago" className="w-100"/>
            </div>
            <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="New York" className="w-100"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>

</div>
    )
}

export default Slider
