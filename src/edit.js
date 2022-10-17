import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
} from '@wordpress/components';

import './editor.scss';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const testchange = (data) => {
		setAttributes({ link: data });
	};
	useEffect(() => {
		fetch(attributes.link)
			.then((data) => data.json())
			.then((res) => {
				console.log(res);
				setAttributes({ data: res });
			});
	}, [attributes.link]);


	return (
		<div {...blockProps}>
			<h1>rtSlides</h1>
			{attributes.data ? '' : <h2>...loading</h2>}

			{attributes.data && (
				<div className="rt_slides ">
					<div className="rt_wrapper ">
						{attributes.data &&
							attributes.data.map((value, key) => {
								return (
									<div className="rt_slide ">
										<h2>{value.id}</h2>
									</div>
								);
							})}
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
								onChange={testchange}
								help={__('data fetch location')}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
