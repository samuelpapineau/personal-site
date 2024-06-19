import './Timeline.scss';

export const runtime = 'edge';

function time_worked(start_time: number, work_times: Object){
    let total_time =  Date.now() - start_time;

}
export const Timeline = () => {

	return (
		<>
            <div className="timeline-content">
                <div className="timeline-bar">
                    <div className="circle-1"></div>

                    <div className="line-content">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                    </div>
                    <div className="circle-2"></div>


                </div>
                <div className="pinax-content">
                    <div className="pinax-chevron"></div>
                    <div className="pinax-rectangle"></div>
                    <div className="pinax-logo"></div>
                </div>
            </div>
		</>
	);
};

export default Timeline;