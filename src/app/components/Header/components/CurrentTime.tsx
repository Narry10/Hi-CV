"use client";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import moment from 'moment';

const CurrentTime: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(moment())

	const updateCurrentTime = useCallback(() => {
		setCurrentTime(moment())
	}, [])

	useEffect(() => {
		const interval = setInterval(updateCurrentTime, 1000)

		return () => clearInterval(interval)
	}, [updateCurrentTime])

	const formattedTime = useMemo(
		() => currentTime.format('HH:mm ddd, DD MMM'),
		[currentTime]
	)

	return (
		<div className="text-gray-700 font-roboto text-24 font-normal transition">
			{formattedTime}
		</div>
	)
};

export default CurrentTime;