var data = {
    offices: {
        1: {
            name: 'springfield',
            agents: {
                1: {
                    name: 'Marge Simpson',
                    properties: {
                        AZMC00001: {
                            deals: {
                                10: {
                                    offers: {
                                        1: {
                                            offerPrice: 120000,
                                            status: 'pending'
                                        },
                                        2: {
                                            offerPrice: 8000,
                                            status: 'approved'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                2: {
                    name: 'Homer Simpson',
                    properties: {
                        AZMC00002: {
                            deals: {
                                5: {
                                    offers: {
                                        1: {
                                            offerPrice: 30000,
                                            status: 'pending'
                                        },
                                        2: {
                                            offerPrice: 25000,
                                            status: 'approved'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                3: {
                    name: 'Bart Simpson',
                    properties: {
                        AZMC000003: {
                            acres: 30,
                            deals: {
                                3: {
                                    acres: 10,
                                    offers: {
                                        1: {
                                            offerPrice: 30000,
                                            status: 'pending'
                                        },
                                        2: {
                                            offerPrice: 25000,
                                            status: 'approved'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                4: {
                    name: 'Lisa Simpson',
                    properties: {
                        AZMC000004: {
                            acres: 40,
                            deals: {
                                2: {
                                    acres: 3,
                                    offers: {
                                        1: {
                                            offerPrice: 30000,
                                            status: 'pending'
                                        },
                                        2: {
                                            offerPrice: 25000,
                                            status: 'approved'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                5: {
                    name: 'Maggie Simpson',
                    properties: {
                        AZMC00004: {
                            acres: 30,
                            deals: {
                                1: {
                                    acres: 10,
                                    status: 'closed',
                                    offers: {
                                        1: {
                                            offerPrice: 30000,
                                            status: 'pending'
                                        },
                                        2: {
                                            offerPrice: 25000,
                                            status: 'approved'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};



var results = {
    offices: {
        name: 'springfield',
        1: {
            agents: {
                1: {
                    name: 'Marge Simpson',
                    totalAcres: 60,
                    avgAcres: 10,
                    minAcres: 6,
                    maxAcres: 10,
                    properties: {
                        AZMC00004: {
                            deals: {
                                1: {
                                    totalOfferPrice: 34234234,
                                    avgOfferPrice: 234234234,
                                    minOfferPrice: 3242343,
                                    maxOfferPrice: 3423424234
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};