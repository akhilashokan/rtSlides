import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import {
	TextControl,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

import './editor.scss';
import { useEffect } from 'react';
import { useRef } from 'react';
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const linkChange = (data) => {
		setAttributes({ link: data });
	};
	const fontChange = (data) => {
		setAttributes({ font: data });
	};
	const btnColorChange = (data) => {
		setAttributes({ btnColor: data });
	};
	useEffect(() => {
		fetch(attributes.link)
			.then((data) => data.json())
			.then((res) => {
				console.log(res);
				setAttributes({ data: res });
			});
	}, [attributes.link]);

	const rtWrapperRef = useRef();
	return (
		<div {...blockProps}>
			<h1 style={{ fontSize: '2rem' }} title="This heading is only visible in editor" >rtSlides</h1>
			{attributes.data ? '' : <h2>...loading</h2>}

			{attributes.data && (
				<div className="rt_slides">
					<div className="rt_wrapper" ref={rtWrapperRef}>
						{attributes.data &&
							attributes.data.map((value, key) => {
								console.log(value);
								return (
									<div className="rt_slide">
										<header>
											<h2 style={{ fontSize: attributes.font }} >{value.title.rendered}</h2>
										</header>
										<img
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
			)}

			<InspectorControls>
				<PanelBody title={__('Data Url')} initialOpen={true}>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Data url')}
								value={attributes.link}
								onChange={linkChange}
								help={__('data fetch location')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<TextControl
								label={__('Font Size')}
								value={attributes.font}
								onChange={fontChange}
								help={__('content font size')}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<legend>
								{__('Button Color')}
							</legend>
							<ColorPalette
								value={attributes.btnColor}
								onChange={btnColorChange}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
