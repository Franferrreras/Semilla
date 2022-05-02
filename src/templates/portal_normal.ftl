<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	
    <title>${themeDisplay.getLayout().getName(themeDisplay.getLocale())} - <@liferay.language key="ventana.visitante" /> </title>
    
	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/jquery.mCustomScrollbar.min.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/slick-carousel/slick/slick.min.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/datepickk.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/multiselect.min.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/jquery-ui.min.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/jquery.scrolling-tabs.min.js"/>
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/jspdf.min.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/html2canvas.min.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/jssocials.min.js"/>
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/config.js"/>
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/cmaot-liferay.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/cookies.js" />
	<@liferay.js file_name="${themeDisplay.getPathThemeJavaScript()}/libs/InstagramFeed.min.js" />


	
</head>

<body class="${css_class}">
<#if IsNotVentana>
<div class="evr-repository">
	<div class="evr-bg-repository">
</#if>
<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<#if (permissionChecker.hasPermission(themeDisplay.getScopeGroupId(), controlPanelClassName, controlPanelPrimKey, "VIEW_CONTROL_PANEL"))>
	<@liferay.control_menu />
</#if>

<div id="wrapper" class="container-fluid">

    <#include "${full_templates_path}/header.ftl" />
	<div id="evr-main-content" class="evr-main-content">
    	<#include "${full_templates_path}/content.ftl" />
	</div>
    <#include "${full_templates_path}/footer.ftl" />

</div>

<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />
<#if IsNotVentana>
	</div>
</div>
</#if>

<#include "${full_templates_path}/cookies.ftl" />
</body>

</html>