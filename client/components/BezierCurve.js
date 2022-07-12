import { useEffect, useState, Fragment } from 'react';

const cubicBezier = (p0, p1, p2, p3, t) => {
	const finalX = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
	const finalY = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
	return { finalX, finalY };
};
const quadraticPoints = [
	{ x: 35, y: 475, active: false },
	{ x: 130, y: 75, active: false },
	{ x: 470, y: 575, active: false },
	{ x: 785, y: 300, active: false },
];

const CubicBezier = () => {
	const [controlPoints, setControlPoints] = useState(quadraticPoints);
	const [animate, setAnimate] = useState(true);
	const [origin, setOrigin] = useState(1);
	const [t, setT] = useState(0.5);

	useEffect(() => {
		setControlPoints([
			{ x: Math.random() * 850, y: Math.random() * 600, active: false },
			{ x: Math.random() * 850, y: Math.random() * 600, active: false },
			{ x: Math.random() * 850, y: Math.random() * 600, active: false },
			{ x: Math.random() * 850, y: Math.random() * 600, active: false },
		]);
	}, []);

	const lerp = (x1, x2) => (1 - t) * x1 + t * x2;

	const findPointsBetween = (pointArr) => {
		const tempPointArr = [];
		for (let i = 1; i < pointArr.length; i++) {
			const point1 = pointArr[i];
			const point2 = pointArr[i - 1];
			const pointBetween = { x: lerp(point1.x, point2.x), y: lerp(point1.y, point2.y) };
			tempPointArr.push(pointBetween);
		}
		return tempPointArr;
	};

	const handlePointerDown = (e, i) => {
		const el = e.target;
		const bbox = e.target.getBoundingClientRect();
		const x = e.clientX - bbox.left;
		const y = e.clientY - bbox.top;
		el.setPointerCapture(e.pointerId);

		const tempPointsArr = controlPoints.slice();

		tempPointsArr[i].active = true;
		tempPointsArr[i].offset = { x: x, y: y };

		setControlPoints(tempPointsArr);
	};
	const handlePointerMove = (e, i) => {
		const bbox = e.target.getBoundingClientRect();
		const x = e.clientX - bbox.left;
		const y = e.clientY - bbox.top;

		if (controlPoints[i].active) {
			const tempPointsArr = controlPoints.slice();
			if (tempPointsArr[i].y - (tempPointsArr[i].offset.y - y) < 5) return;
			if (tempPointsArr[i].y - (tempPointsArr[i].offset.y - y) > 600) return;
			if (tempPointsArr[i].x - (tempPointsArr[i].offset.x - x) < 5) return;
			if (tempPointsArr[i].x - (tempPointsArr[i].offset.x - x) > 840) return;

			tempPointsArr[i].x = tempPointsArr[i].x - (tempPointsArr[i].offset.x - x);
			tempPointsArr[i].y = tempPointsArr[i].y - (tempPointsArr[i].offset.y - y);
			setControlPoints(tempPointsArr);
		}
	};
	const handlePointerUp = (e, i) => {
		const tempPointsArr = controlPoints.slice();

		tempPointsArr[i].active = false;

		setControlPoints(tempPointsArr);
	};

	// Animation
	useEffect(() => {
		if (t >= 1) {
			setOrigin(1);
		}
		if (t <= 0) {
			setOrigin(0);
		}
		if (animate) {
			const interval = setInterval(() => {
				if (origin === 1) {
					setT((prevT) => (prevT * 1000 - 1) / 1000);
				}
				if (origin === 0) {
					setT((prevT) => (prevT * 1000 + 1) / 1000);
				}
			}, 5);

			return () => clearInterval(interval);
		}
	}, [t, origin, setT, animate]);

	const [intermediatePoints1, setIntermediatePoints1] = useState([]);
	const [intermediatePoints2, setIntermediatePoints2] = useState([]);

	useEffect(() => {
		setIntermediatePoints1(findPointsBetween(controlPoints));
	}, [controlPoints, t]);

	useEffect(() => {
		setIntermediatePoints2(findPointsBetween(intermediatePoints1));
	}, [intermediatePoints1]);

	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='full' height='100%' viewBox='0 0 850 600'>
			{intermediatePoints1.length === 3 && (
				<path
					d={`M ${controlPoints[0].x} ${controlPoints[0].y}  c ${controlPoints[1].x - controlPoints[0].x} ${controlPoints[1].y - controlPoints[0].y} ${
						controlPoints[2].x - controlPoints[0].x
					} ${controlPoints[2].y - controlPoints[0].y} ${controlPoints[3].x - controlPoints[0].x} ${controlPoints[3].y - controlPoints[0].y}`}
					stroke='#111827'
					strokeWidth='4'
					fill='rgba(12, 74, 110, 0.53)'
				/>
			)}
			{controlPoints.map((point, i) => i > 0 && <path key={i} d={`M${point.x} ${point.y} L${controlPoints[i - 1].x} ${controlPoints[i - 1].y}`} stroke='#111827' strokeWidth='2' />)}
			{intermediatePoints1.length > 0 && (
				<path d={`M${intermediatePoints1[0].x} ${intermediatePoints1[0].y} L${intermediatePoints1[1].x} ${intermediatePoints1[1].y}`} stroke='#3dff9e' strokeWidth='2' className='z-10' />
			)}
			{intermediatePoints1.length > 0 && (
				<path d={`M${intermediatePoints1[1].x} ${intermediatePoints1[1].y} L${intermediatePoints1[2].x} ${intermediatePoints1[2].y}`} stroke='#3dff9e' strokeWidth='2' className='z-10' />
			)}
			{intermediatePoints2.length > 0 && (
				<path d={`M${intermediatePoints2[0].x} ${intermediatePoints2[0].y} L${intermediatePoints2[1].x} ${intermediatePoints2[1].y}`} stroke='#e31e63' strokeWidth='2' className='z-10' />
			)}
			<circle
				cx={cubicBezier(controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3], 1 - t).finalX}
				cy={cubicBezier(controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3], 1 - t).finalY}
				fill='#42c5f5'
				strokeWidth='2'
				stroke='#111827'
				r='4'
			/>
			{intermediatePoints1.map((point, i) => (
				<circle key={i} cx={point.x} cy={point.y} fill='#3dff9e' strokeWidth='2' stroke='#111827' r='4' />
			))}
			{intermediatePoints2.map((point, i) => (
				<circle key={i} cx={point.x} cy={point.y} fill='#e31e63' strokeWidth='2' stroke='#111827' r='4' />
			))}
			{controlPoints.map((point, i) => (
				<Fragment key={i}>
					<circle className='cursor-pointer' cx={point.x} cy={point.y} fill='white' strokeWidth='2' stroke='#111827' r='5' />
					<circle
						className='cursor-pointer'
						onPointerDown={(e) => handlePointerDown(e, i)}
						onPointerUp={(e) => handlePointerUp(e, i)}
						onPointerMove={(e) => handlePointerMove(e, i)}
						cx={point.x}
						cy={point.y}
						fill='#00ff0000'
						r='20'
					/>
				</Fragment>
			))}
		</svg>
	);
};

export default CubicBezier;
