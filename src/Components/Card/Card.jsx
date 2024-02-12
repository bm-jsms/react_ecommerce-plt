export const Card = data => {
	return (
		<div className='bg-black/90 dark:bg-white/80 cursor-pointer w-56 h-60 rounded-lg'>
			<figure className='relative mb-2 w-full h-4/5'>
				<span className='absolute bottom-0 left-0 bg-white/70 dark:bg-black/80 rounded-lg text-black dark:text-white text-xs m-2 px-3 py-0.5 font-medium'>
					{data.data.category.name}
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					src={data.data.images[0]}
					alt={data.data.title}
				/>
				<div className='absolute top-0 right-0 flex justify-center items-center bg-white dark:bg-black/95 w-6 h-6 rounded-full m-2 p-1 dark:text-white/80'>
					+
				</div>
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-normal text-white/90 dark:text-black'>
					{data.data.title}
				</span>
				<span className='text-lg font-bold text-white/80 dark:text-black'>
					<small className='font-semibold'>$</small>
					{data.data.price}
				</span>
			</p>
		</div>
	);
};
