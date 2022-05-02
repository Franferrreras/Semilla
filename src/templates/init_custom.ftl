<#setting time_zone="Europe/Madrid">
<#-- Retrieves user portrait -->
<#assign portrait_id_str = user.getPortraitId() />
<#assign portrait_url = user.getPortraitURL(themeDisplay) />

<#assign images_folder = theme_display.getPathThemeImages() />

<!-- is better get theme from theme resources for caching in varnish rather than get it from site logo-->
<#assign site_logo = images_folder + "/logo_ventana.png" /> 
<#assign consejeria_logo = images_folder + "/logo_consejeria.png" />

<!-- Logo -->
<#assign site_logo = htmlUtil.escape(theme_display.getCompanyLogo()) />
<#assign logo_description = htmlUtil.escape(site_name) />
<#assign site_name = htmlUtil.escape(page_group.getDescriptiveName()) />


<!-- Retrieves content links footer -->
<#assign journalContent = serviceLocator.findService("com.liferay.journal.util.JournalContent") />
<#assign ddmTemplateLocalService = serviceLocator.findService("com.liferay.dynamic.data.mapping.service.DDMTemplateLocalService") />

<#--  Custom links Ventana del Visitante  -->
<#assign redesId = theme_settings["redes-sociales-article-id"]!"" />
<#assign headerPrivateZoneButton = theme_settings["espacio-personal-enlace"]!"" />
<#assign headerURLLoginButton = theme_settings["url-login"]!"" />
<#assign headerURLLogoutButton = theme_settings["url-logout"]!"" />

<#assign twitterLink = theme_settings["twitter-link"]!"" />
<#assign fbLink = theme_settings["facebook-link"]!"" />
<#assign instagramLink = theme_settings["instagram-link"]!"" />
<#assign pinterestLink = theme_settings["pinterest-link"]!"" />

<#assign urlConsejeria = theme_settings["url-consejeria"]!"" />
<#assign urlJunta = theme_settings["url-junta"]!"" />
<#assign urlFeder = theme_settings["url-feder"]!"" />

<#assign EnlacesPieId = theme_settings["enlaces-pie-article-id"]!"" /> 
<#assign site_ventana_group_id = theme_settings["ventana-group-id"]!"" />
<#assign site_actual_group_id = theme_display.getLayout().getGroupId() />
<#assign ventanaUrl = theme_settings["url-ventana"]!"" />
<#assign politicaCookies = theme_settings["url-cookies"]!"" />

<#assign IsNotVentana = false />

<#assign controlPanelClassName = "90" />
<#assign controlPanelPrimKey = 90 />


<#if is_signed_in>
	
<#if !(permissionChecker.hasPermission(themeDisplay.getScopeGroupId(), controlPanelClassName, controlPanelPrimKey, "VIEW_CONTROL_PANEL"))>
	<#assign css_class>${css_class?replace("has-control-menu", "")}</#assign>
    <#-- <#assign css_class>${css_class?replace("open", "")}</#assign> -->   
</#if>
</#if>