import pandas as pd

def score(row):
    final_score=(row["TotalEngagement"]+1)/(row["Impressions"]+2)
    return final_score

def sortWebsites(CampaignId,dataframe):
    rslt_df = dataframe[dataframe['CampaignId']==CampaignId]
    rslt_df=rslt_df.copy()
    rslt_df["score"]=rslt_df.apply(score, axis=1)
    rslt_df=rslt_df.sort_values("score",ascending=False)
    return rslt_df