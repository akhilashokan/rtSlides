import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div className="rt_slides">
				<div className="rt_wrapper">
					{attributes.data.map((value, key) => {
						return (
							<div className="rt_slide " key={key}>
								<header>
									<h2 className="rt_title" style={{ fontSize: attributes.font }}>
										<a
											target={'_blank'}
											rel={'noopener'}
											href={value.link}
										>
											{value.title.rendered}
										</a>
									</h2>
									<span>
										{new Date(
											value.date
										).toLocaleDateString()}
									</span>
								</header>
								<img
									className="rt_img"
									src={value.episode_featured_image}
								/>
							</div>
						);
					})}
				</div>
				<div className="rt_navigation">
					<span className="rt_nav_left" style={{ borderRightColor: attributes.btnColor }} accessKey="left">
					</span>
					<span className="rt_nav_right" style={{ borderLeftColor: attributes.btnColor }} accessKey="right">
					</span>
				</div>
			</div>
		</div>
	);
}
