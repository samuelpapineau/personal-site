import './Timeline.scss';

export const Timeline = () => {

	return (
		<>
            <div className="timeline-content">
                <div className="circle-1"></div>
                <div className="circle-2"></div>

                <div className="line-content">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
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