<#assign groupLocalService = serviceLocator.findService("com.liferay.portal.kernel.service.GroupLocalService")>
<#assign headerPrivateZoneButton = theme_settings["espacio-personal-enlace"]!"" />
<#assign headerURLLoginButton = theme_settings["url-login"]!"" />
<#assign headerURLLogoutButton = theme_settings["url-logout"]!"" />
<#if !site_ventana_group_id?has_content>
	<#assign site_ventana_group_id = site_actual_group_id />
	<#assign groupFriendlyUrl = groupLocalService.getGroup(site_ventana_group_id?number).getFriendlyURL() />
	<#assign urlGroup = ventanaUrl>
<#else>
	<#assign groupFriendlyUrl = groupLocalService.getGroup(site_ventana_group_id?number).getFriendlyURL() />
	<#assign urlGroup = ventanaUrl>
</#if>
<header id="banner" role="banner" class="evr-header">
<#if !IsNotVentana>
    <div id="heading" class="">
        <div class="maxwidth maxwidth--inner">
        	<#--  JUNTA logo -->
            <div class="evr-header__content-logo">
                <div class="evr-header__block">
                <#if urlConsejeria?has_content>
                <h1 class="evr-header__logo evr-header__logo--no-text">
                    <a href="${urlConsejeria}" target="_blank" class="${logo_css_class}" >
                            <img alt="${logo_description}" class="hidden-xs hidden-sm hidden-md " src="${consejeria_logo}" />
                            <img alt="${logo_description}" class="visible-xs visible-sm visible-md " src="${images_folder}/logo_simple.png" />
                    </a>
                </h1>
                </#if>
                </div>
                <#-- SITE logo -->
                <div class="evr-header__block">
                    <h1 class="evr-header__logo evr-header__logo--no-text">
                        <a class="${logo_css_class}" href="${urlGroup}" title="<@liferay.language_format arguments="${site_name}" key="go-to-x" />" tabindex="0">
                            <span class="sr-only">${site_name}</span>
                            <img alt="" class="hidden-xs hidden-sm hidden-md " src="${images_folder}/logo_ventana.png" />
                            <img alt="" class="visible-xs visible-sm visible-md " src="${images_folder}/logo_espaciosNaturales_simple.png" />
                        </a>
                    </h1>
                </div>
            </div>
        </div>
        <div class="evr-header__container">
            <div class="maxwidth maxwidth--inner">
                <#if has_navigation && is_setup_complete>
                    <#include "${full_templates_path}/navigation.ftl" />
                </#if>
                <div class="evr-header__user">
                    <button id="toggleMainMenu" type="button" class="evr-btn toggleMainMenu btn btn-icon sidenav-toggler visible-xs visible-sm visible-md" data-target="#mainMenuResponsive">
                        <span class=""></span>
                        <span class=""></span>
                        <span class=""></span>
                    </button>
                    <div class="evr-search">
                        <button class="evr-search__icon-search">
                            <svg class="lexicon-icon lexicon-icon-search" focusable="false" role="img" viewBox="0 0 512 512"><title>search</title>
                                <path class="lexicon-icon-outline" d="M503.254 467.861l-133.645-133.645c27.671-35.13 44.344-79.327 44.344-127.415 0-113.784-92.578-206.362-206.362-206.362s-206.362 92.578-206.362 206.362 92.578 206.362 206.362 206.362c47.268 0 90.735-16.146 125.572-42.969l133.851 133.851c5.002 5.002 11.554 7.488 18.106 7.488s13.104-2.486 18.106-7.488c10.004-10.003 10.004-26.209 0.029-36.183zM52.446 206.801c0-85.558 69.616-155.173 155.173-155.173s155.174 69.616 155.174 155.173-69.616 155.173-155.173 155.173-155.173-69.616-155.173-155.173z"></path>
                            </svg>
                        </button>
                        <div class="t-hide evr-search__content">
                            <button class="evr-search__icon-search-close"></button>
                            <@liferay_portlet["runtime"]
					            portletProviderAction=portletProviderAction.VIEW
					            portletName="AssetSearchPlugin"
					            instanceId="global-search-vv"
					            />
                        </div>
                    </div>
                    <!-- Boton zona personal -->
                    <#if is_signed_in>
                        <a href="${headerPrivateZoneButton}" class="evr-btn user" title="<@liferay.language key="header.espacio.personal" />" style="text-decoration: none;">
                        	<figure style="display: inline;">
                        		<img alt="<@liferay.language key="header.espacio.personal" />" src="/medioambiente/portal/o/ventana-theme/images/icons/user.png" style="width: 25px;">
                        	</figure>
                        </a>
                        <div class="evr-logout-section">
                            ${freeMarkerPortletPreferences.reset()}
                            ${freeMarkerPortletPreferences.setValue("portletSetupPortletDecoratorId", "barebone")}

                            <@liferay_portlet["runtime"]
                            portletProviderAction=portletProviderAction.VIEW
                            portletName="es_juntadeandalucia_cma_filter_post_logout_portlet_PortletLogoutPortlet"
                            instanceId="ntTD4tAL0gOut"
                            defaultPreferences="${freeMarkerPortletPreferences}"
                            />
                        </div>
                    <#else>
                    	<a href="${headerURLLoginButton}" class="evr-btn user" title="<@liferay.language key="header.espacio.personal" />" style="text-decoration: none;">
                        	<figure style="display: inline;">
                        		<img alt="<@liferay.language key="header.espacio.personal" />" src="/medioambiente/portal/o/ventana-theme/images/icons/user.png" style="width: 25px;">
                        	</figure>
                        </a>
                    </#if>
                    <div class="evr-language ">
                            <@liferay_portlet["runtime"]
                                portletProviderAction=portletProviderAction.VIEW
                                portletName="com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet"
                            />
                    </div>
                    <!-- Back url -->
                    <div id="backButton" class="evr-backButton">
                        <button onclick="goBack()"><i class="fa fa-2x fa-arrow-left fa-inverse" aria-hidden="true"></i></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <#else>
 	<div id="heading" class="evr-repository-header">
        <div class="maxwidth maxwidth--inner">
            <div class="evr-header__content-logo">
                <div style="padding-bottom: 20px;">
                    <h2 class="evr-header__logo">
                        <span style="height: 17px; width: 3px; background-color: #333333;"></span>
                        <a href="${site_default_url}" title="<@liferay.language_format arguments="${site_name}" key="go-to-x" />">${site_name}</a>
                    </h2>
                </div>
            </div>
        </div>
    </div>
 </#if>
</header>
<#if has_navigation && is_setup_complete>
    <#include "${full_templates_path}/navigation-responsive.ftl" />
</#if>