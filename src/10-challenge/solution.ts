export enum Gift {
	Coal,
	Train,
	Bicycle,
	SuccessorToTheNintendoSwitch = Gift.Train << Gift.Bicycle,
	TikTokPremium = Gift.Bicycle << Gift.Bicycle,
	Vape = Gift.SuccessorToTheNintendoSwitch << Gift.Bicycle,
	Traditional = Gift.Train | Gift.Bicycle,
	OnTheMove = Gift.Coal | Gift.Bicycle | Gift.TikTokPremium | Gift.Vape,
	OnTheCouch = Gift.OnTheMove & ~Gift.Bicycle | Gift.SuccessorToTheNintendoSwitch
};
