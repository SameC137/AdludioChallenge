import pandas as pd

def score(row:pd.Series)->float:
    """Scoring function that takes the row containing impressions and total engagement to give a score

    Args:
        row (pd.Series): The website entry that will be scored

    Returns:
        float: The score
    """
    final_score=(row["TotalEngagement"]+1)/(row["Impressions"]+2)
    return final_score

def sortWebsites(CampaignId:str,dataframe:pd.DataFrame)->pd.DataFrame:
    """Gives a sorted dataframe of the websites in that campaign based on score

    Args:
        CampaignId (str): The id identifying the campagin
        dataframe (pd.DataFrame): The dataframe for all campagins

    Returns:
        pd.DataFrame: A sorted list of the website in the campagin
    """
    rslt_df = dataframe[dataframe['CampaignId']==CampaignId]
    rslt_df=rslt_df.copy()
    rslt_df["score"]=rslt_df.apply(score, axis=1)
    rslt_df=rslt_df.sort_values("score",ascending=False)
    return rslt_df