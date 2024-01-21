const ShimmerCard = ()=>{
    return (
        <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-content"></div>
        </div>
    )
}

const Shimmer = ()=>{
    return (
        <div className="shimmer-container">
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
        </div>
    )
};

export default Shimmer;