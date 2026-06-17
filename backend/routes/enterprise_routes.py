from flask import Blueprint, request, jsonify

from services.workflow_engine import run_enterprise_workflow

enterprise_bp = Blueprint("enterprise", __name__)

@enterprise_bp.route("/enterprise-task", methods=["POST"])
def enterprise_task():

    data = request.json

    task = data.get("task")

    result = run_enterprise_workflow(task)

    return jsonify(result)