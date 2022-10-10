import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl
} from "@wordpress/components"

import './editor.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps()
	const testchange = (data) => {
		setAttributes({ "link": data })
	}
	const [list, setList] = useState(null)
	useEffect(() => {
		fetch(attributes.link)
			.then(data => data.json())
			.then(res => {
				console.log(res)
				setList(res)
				initSwiper()
			})
	}, [attributes.link])

	const initSwiper = () => {
		const swiper = new Swiper('.rt_swiper', {
			direction: 'horizontal',
			loop: true,
		})
	}

	return (
		<div {...blockProps}>
			<h1>rtSlides</h1>
			{list ? '' : <h2>...loading</h2>}

			{list && <div className='rt_slides rt_swiper'>
				<div className='rt_wrapper swiper-wrapper'>
					{list && list.map((value, key) => {
						console.log(value);
						return <div className='rt_slide swiper-slide'>
							<h2>{value.id}</h2>
						</div>
					})}
				</div>
			</div>}


			< InspectorControls >
				<PanelBody
					title={__("Data Url")}
					initialOpen={true}
				>
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

		</div >
	);
}
