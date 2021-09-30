import flask
from flask import request, jsonify

from flask_cors import CORS
import pandas as pd
import os
from pathlib import Path

import sys, os


from rank  import sortWebsites

app = flask.Flask(__name__)
cors = CORS(app)

app.config["DEBUG"] = True

file_path=Path(__file__).parent.joinpath("impression_log.csv")
data=pd.read_csv(file_path,index_col=0)
aggregated_data=data.groupby(["CampaignId","Site"],as_index=False).agg(TotalEngagement=pd.NamedAgg(column='engagement', aggfunc='sum'), Impressions=pd.NamedAgg(column='engagement', aggfunc='count'),TotalClicks=pd.NamedAgg(column='click', aggfunc='sum'))


@app.route('/api/campaigns', methods=['GET'])
def getCampaignSites():
    if 'campaignId' in request.args:
        id = request.args['campaignId']
    else:
        return "Error: No campaignId field provided. Please specify an campaignId.", 400

    if id not in aggregated_data["CampaignId"].unique():
        return "Campaign Id doesn't exist please specify a correct Id.",  404
    result=sortWebsites(id,aggregated_data)
    response = app.response_class(
        response=result.to_json(orient="records"),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/api/campaigns_list', methods=['GET'])
def getCampaigns():
    campaigns={
        "campaigns": aggregated_data["CampaignId"].unique()
    }
    
    return jsonify(campaigns)

app.run(host="0.0.0.0")