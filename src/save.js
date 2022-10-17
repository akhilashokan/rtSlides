import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<h1>rtSlides</h1>
			<div className="rt_slides ">
				<div className="rt_wrapper ">
					{attributes.data.map((value, key) => {
						return (
							<div className="rt_slide ">
								<h2>{value.id}</h2>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
