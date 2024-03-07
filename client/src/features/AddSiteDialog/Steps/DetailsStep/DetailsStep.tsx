import { Autocomplete, Box, Divider, TextField } from "@mui/material";
import i18n from "i18next";
import { FC } from "react";
import useDetailsStep from "./useDetailsStep";
import StyledDetailsStep from "./DetailsStep.style";
import { AddSiteData } from "../../AddSiteDialog.types";
import LivingRoomIcon from '@mui/icons-material/Weekend';
import KitchenIcon from '@mui/icons-material/Flatware';
import BathroomIcon from '@mui/icons-material/Bathtub';
import BedroomIcon from '@mui/icons-material/Bed';
import HallIcon from '@mui/icons-material/MeetingRoom';
import BalconyIcon from '@mui/icons-material/Balcony';
import WindowIcon from '@mui/icons-material/Window';
import YardIcon from '@mui/icons-material/Yard';

type SpeciesStepProps = {
	handleNextStep: (stepData?: Partial<AddSiteData>) => void;
};

const DetailsStep: FC<SpeciesStepProps> = (props) => {
	const { handleNextStep } = props;

	const { searchInputVal, handleChange, selectPlant } = useDetailsStep({
		handleNextStep,
	});

	const rooms: any[] = [
		{ label: '', value: 'custom' }, // Custom option
		{
			icon: <LivingRoomIcon/>,
			label: 'LivingRoom',
			value: 'livingRoom',
			category: 'indoor'
		},
		{
			icon: <KitchenIcon/>,
			label: 'Kitchen',
			value: 'kitchen',
			category: 'indoor'
		},
		{
			icon: <HallIcon/>,
			label: 'Hall',
			value: 'hall',
			category: 'indoor'
		},
		{
			icon: <BedroomIcon/>,
			label: 'Bedroom',
			value: 'bedroom',
			category: 'indoor'
		},
		{
			icon: <BathroomIcon/>,
			label: 'Bathroom',
			value: 'bathroom',
			category: 'indoor'
		},
		{
			icon: <WindowIcon/>,
			label: 'Window Sill',
			value: 'windowSill',
			category: 'outdoor'
		},
		{
			icon: <BalconyIcon/>,
			label: 'Balcony',
			value: 'balcony',
			category: 'outdoor'
		},
		{
			icon: <YardIcon/>,
			label: 'Garden',
			value: 'garden',
			category: 'outdoor'
		},
	]

	return (
		<StyledDetailsStep>
			<Autocomplete
				options={rooms}
				autoHighlight
				getOptionLabel={(option) => option.label}
				renderOption={(props, option) => (
					option.value === 'custom' ?
						<li {...props}>
							<em>{i18n.t("addSites.customOption")}</em>
						</li>
						:
						<Box component="li" {...props}>
							{option.icon}
							<span>
                            {option.label}
                        </span>
						</Box>
				)}
				groupBy={(option) => option.category}
				renderInput={(params) => (
					// @ts-ignore
					<TextField
						{...params}
						label={i18n.t("addSites.select")}
						inputProps={{ ...params.inputProps, }}
						size="small"
						margin="normal"
						// autoFocus={!isMobile}
					/>
				)}
			/>

			<Divider/>

		</StyledDetailsStep>
	);
};

export default DetailsStep;
