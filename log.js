def log(request):
    target_url = request.GET["url"]
    log_link(target_url)
    return HttpRedirect(target_url)
