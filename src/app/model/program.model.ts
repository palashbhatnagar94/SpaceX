export interface Programs {
    crew?: string,
    details?: string,
    flight_number?: number,
    is_tentative?: boolean,
    launch_date_local?: string,
    launch_date_unix?: number,
    launch_date_utc?: string,
    launch_failure_details?: LaunchFailure,
    launch_site?: LaunchSite,
    launch_success?: boolean,
    launch_window?: number,
    launch_year?: string,
    links?: Links,
    mission_id?: string[],
    mission_name?: string,
    rocket?: Rocket,
    ships?: string[],
    static_fire_date_unix?: number,
    static_fire_date_utc?: string,
    tbd?: boolean,
    telemetry?: Telemetry,
    tentative_max_precision?: string
    timeline?: Timeline,
    upcoming?: boolean
}

export interface LaunchFailure {
    time?: number,
    altitude?: number,
    reason?: string
}

export interface LaunchSite {
    site_id?: string,
    site_name?: string,
    site_name_long?: string
}

export interface Links {
    article_link?: string,
    flickr_images?: string[],
    mission_patch?: string,
    mission_patch_small?: string,
    presskit?: string,
    reddit_campaign?: string,
    reddit_launch?: string,
    reddit_media?: string,
    reddit_recovery?: string,
    video_link?: string,
    wikipedia?: string,
    youtube_id?: string
}

export interface Rocket {
    fairings?: Fairing,
    first_stage?: FirstStage
    rocket_id?: string,
    rocket_name?: string,
    rocket_type?: string,
    second_stage?: SecondStage
}

export interface Fairing {
    reused?: boolean,
    recovery_attempt?: boolean,
    recovered?: boolean,
    ship?: boolean
}

export interface FirstStage {
    cores?: Core[]
}

export interface SecondStage {
    block?: number,
    payload?: Payload[];
}

export interface Core {
    block?: number,
    core_serial?: string,
    flight?: number,
    gridfins?: boolean,
    land_success?: boolean,
    landing_intent?: boolean,
    landing_type?: boolean,
    landing_vehicle?: boolean,
    legs?: boolean,
    reused?: boolean
}

export interface Payload {
    cap_serial?: string,
    cargo_manifest?: string,
    customers?: string[],
    manufacturer?: string,
    nationality?: string,
    norad_id?: number[],
    orbit?: string,
    orbit_params?: OrbitParams,
    payload_id?: string,
    payload_mass_kg?: number,
    payload_mass_lbs?: number,
    payload_type?: string,
    reused?: boolean,
}

export interface OrbitParams {
    apoapsis_km?: number,
    arg_of_pericenter?: number,
    eccentricity?: number,
    epoch?: string,
    inclination_deg?: number,
    lifespan_years?: number,
    longitude?: number,
    mean_anomaly?: number,
    mean_motion?: number,
    periapsis_km?: number,
    period_min?: number,
    raan?: number,
    reference_system?: string,
    regime?: string,
    semi_major_axis_km?: number,
}

export interface Telemetry {
    flight_club?: number
}

export interface Timeline {
    webcast_liftoff?: number
}

export interface FilterOption {
    year?: number,
    launch?: boolean,
    land?: boolean
}
